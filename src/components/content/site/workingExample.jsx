import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ComponentSelector } from '../contentSource';
import Prism from 'prismjs';
const JsBeautify = require('js-beautify').html;
const Assets = require.context('assets/img', false, /\.png$/);



function printExample(component) {

	const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
	// Fix for some weird tags like blockquote
	var htmlCodeFixed = staticMarkup.replace(
		/<blockquote>|<dl>|<dl class="dl-horizontal">/gi,
		function myFunction(x) {
			return x+='\n';
		}
	);

	let htmlCode = JsBeautify(htmlCodeFixed);
	const codeBeauty = Prism.highlight(htmlCode, Prism.languages.html);

	return (
		<pre className="language-markup">
			<code dangerouslySetInnerHTML={{__html: codeBeauty}}></code>
		</pre>
	);
}


// alter the number of columns the example and its code are painted in
function getColumns(cols) {
	let colsLeft;
	let colsRight;
	if (typeof cols == 'undefined') {
		colsLeft = '6';
		colsRight = '6';
	} else {
		colsLeft = cols.substr(0, cols.indexOf('-'));
		colsRight = cols.split('-')[1];
	}
	const toggleColsExample = 'col-md-' + colsLeft;
	const toggleColsCode = 'col-md-' + colsRight;

	return [toggleColsExample, toggleColsCode];
}


function getContent(data, tabTarget, lang, cols, type) {

	return data.map(function(info, key) {
		const example = ComponentSelector(info, tabTarget, lang, cols, key);
		const toggleColsExample = getColumns(cols)[0];
		const toggleColsCode = getColumns(cols)[1];
		const text = info.infoText;

		return(
			<div className="row" key={key}>
				<div className={toggleColsExample}>
					{example}
				</div>
				<div className={toggleColsCode}>
					{printExample(example)}
				</div>
			</div>
		);
	});
}


export function WorkingExample(props) {
	const data = props.info.data;
	const type = props.info.type;
	const lang = props.lang;
	const target = props.info.target;
	const cols = props.info.cols;
	const tabTarget = props.tabTarget;
	const content = getContent(data, tabTarget, lang, cols, type);

	return (
		<div className="component-example working-example">
			{content}
		</div>
	);
}
