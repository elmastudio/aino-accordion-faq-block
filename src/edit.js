/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment, useState } from '@wordpress/element';
import {
	InspectorControls,
	RichText,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';
import './index.scss';

export default function Edit({ attributes, setAttributes, className }) {

	const {
		question,
		borderRadius,
		iconPosition,
		border,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
	} = attributes;

	const blockClasses = classnames(
		className, iconPosition, {
			[`br__${borderRadius}`] : borderRadius ? borderRadius : undefined,
			[`pt__${paddingTop}`] : paddingTop ? paddingTop : undefined,
			[`pb__${paddingBottom}`]: paddingBottom ? paddingBottom : undefined,
			[`pl__${paddingLeft}`] : paddingLeft ? paddingLeft : undefined,
			[`pr__${paddingRight}`] : paddingRight ? paddingRight : undefined,
			'has-border': border,
		}
	);
	
	const blockProps = useBlockProps( {
		className: blockClasses,
		style: {
			borderRadius: borderRadius ? borderRadius + 'px' : undefined,
		},
	} );

	const ANSWER_TEMPLATE = [
		[ 'core/paragraph', { placeholder: 'Write an answer ...' } ],
	];

	const borderRadiusOptions = [
		{ value: "none", label: __('Not set', 'ainoblocks') },
		{ value: "xxs", label   : __('SSX', 'ainoblocks') },
		{ value: "xs", label   : __('XS', 'ainoblocks') },
		{ value: "s", label   : __('S', 'ainoblocks') },
		{ value: "m", label   : __('M', 'ainoblocks') },
		{ value: "l", label   : __('L', 'ainoblocks') },
		{ value: "xl", label   : __('XL', 'ainoblocks') },
		{ value: "xxl", label   : __('XXL', 'ainoblocks') },
		{ value: "xxxl", label   : __('3XL', 'ainoblocks') },
		{ value: "xxxxl", label   : __('4XL', 'ainoblocks') }
	];

	const iconPositionOptions = [
		{ value: "icon__right", label   : __('right-aligned', 'ainoblocks') },
		{ value: "icon__left", label: __('left-aligned', 'ainoblocks') },
	];

	const [isActive, setActive] = useState(false);

	const toggleClass = () => {setActive(!isActive);};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Accordion FAQ settings', 'ainoblocks')}>
					<SelectControl
						label={__("Icon Position", 'ainoblocks')}
						value={iconPosition}
						options={iconPositionOptions}
						onChange={iconPosition => setAttributes({ iconPosition })}
					/>
					<ToggleControl
						label={__('Bottom Border', 'ainoblocks')}
						checked={!!border}
						onChange={() => setAttributes({ border: !border })}
						help={!!border ? __('THe block has bottom border.', 'ainoblocks') : __('Toggle for a border below the block.', 'ainoblocks')}
					/>
					<SelectControl
						label={__('Border Radius (all)', 'ainoblocks')}
						value={borderRadius}
						options={borderRadiusOptions}
						onChange={borderRadius => setAttributes({ borderRadius })}
					/>
				</PanelBody>
					<PanelBody title={__('Responsive Spacing', 'ainoblocks')}>
					<RangeControl
						label={__('Padding Top', 'ainoblocks')}
						value={paddingTop}
						onChange={(paddingTop) => setAttributes({ paddingTop })}
						min={0}
						max={19}
						allowReset={true}
						resetFallbackValue={0}
					/>
					<RangeControl
						label={__('Padding Bottom', 'ainoblocks')}
						value={paddingBottom}
						onChange={(paddingBottom) => setAttributes({ paddingBottom })}
						min={0}
						max={19}
						allowReset={true}
						resetFallbackValue={0}
					/>
					<RangeControl
						label={__('Padding Left', 'ainoblocks')}
						value={paddingLeft}
						onChange={(paddingLeft) => setAttributes({ paddingLeft })}
						min={0}
						max={19}
						allowReset={true}
						resetFallbackValue={0}
					/>
					<RangeControl
						label={__('Padding Right', 'ainoblocks')}
						value={paddingRight}
						onChange={(paddingRight) => setAttributes({ paddingRight })}
						min={0}
						max={19}
						allowReset={true}
						resetFallbackValue={0}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className={`accordion`}>
					<RichText
						tagName='h3'
						allowedFormats={ [ 'core/bold', 'core/italic' ] } 
						value={question}
						className="has-xxs-font-size"
						placeholder={__('Write a question ...', 'ainoblocks')}
						onChange={(value) => setAttributes({ question: value })}
					/>
				</div>

				<div className={`panel`}>
				<InnerBlocks
					template={ ANSWER_TEMPLATE }
				/>
				</div>

			</div>
		</Fragment>
	);
}
