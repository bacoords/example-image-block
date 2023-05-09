/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, Button } from '@wordpress/components';

import { MediaToolbar, Image } from '@10up/block-components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import AttachmentImage from './AttachmentImage';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { imageOne, imageTwo } = attributes;

	const handleImageSelect = (image) => {
		setAttributes({
			imageOne: image.id,
		});
	};

	const handleImageTwoSelect = (image) => {
		setAttributes({
			imageTwo: image.id,
		});
	};

	const handleImageRemove = () => {
		setAttributes({
			imageOne: null,
		});
	};
	const handleImageTwoRemove = () => {
		setAttributes({
			imageTwo: null,
		});
	};



	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<Panel>
					<PanelBody title={ __( 'Background Image Settings', 'double-image' ) }>
						<PanelRow>

							<Image
								id={imageTwo}
								className="my-image"
								size="full"
								onSelect={handleImageTwoSelect}
								labels={{
									title: 'Select Background Image',
									instructions: 'Upload a media file or pick one from your media library.'
								}}
							/>

						</PanelRow>
						<PanelRow>
							<Button isDestructive variant="link" onClick={handleImageTwoRemove}>Remove Background Image</Button>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>

            <BlockControls>
                <MediaToolbar
                    isOptional
                    id={ imageOne }
                    onSelect={ handleImageSelect }
                    onRemove={ handleImageRemove }
                />
            </BlockControls>
			<Image
				id={imageOne}
				className="my-image"
				size="full"
				onSelect={handleImageSelect}
				labels={{
					title: 'Select Foreground Image',
					instructions: 'Upload a media file or pick one from your media library.'
				}}
			/>
			{ imageTwo && (<AttachmentImage imageId={imageTwo}  />) }
		</div>
	);
}
