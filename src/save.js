/**
 * External dependencies
 */
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	RichText,
} from '@wordpress/block-editor';

export default function save({ attributes }) {

	const {
		borderRadius,
		iconPosition,
		border,
		question,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
	} = attributes;

	const blockClasses = classnames(
		classnames, iconPosition, {
			[`br__${borderRadius}`] : borderRadius ? borderRadius : undefined,
			[`pt__${paddingTop}`] : paddingTop ? paddingTop : undefined,
			[`pb__${paddingBottom}`]: paddingBottom ? paddingBottom : undefined,
			[`pl__${paddingLeft}`] : paddingLeft ? paddingLeft : undefined,
			[`pr__${paddingRight}`] : paddingRight ? paddingRight : undefined,
			'has-border': border,
		}
	);

	const blockProps = useBlockProps.save( {
		className: blockClasses,
	} );

	return (

		<div
			{ ...blockProps }
			{ ...{ 'x-data': '{ open: false }' } }
			{ ...{ '@click':'open = !open' } }
			{ ...{ ':class': `{'open': open, 'close': ! open }` } }
		>
			<div
				className="accordion"
			>
				<RichText.Content
					tagName='h3'
					className="has-xxs-font-size"
					value={question}
				/>
			</div>
			<div
				className="panel"
			>
				<InnerBlocks.Content />
			</div>
		</div >
	);
}
