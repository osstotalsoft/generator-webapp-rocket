import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';
import accepts from 'attr-accept'
import { useToast } from 'hooks/toasts'
import UploadButton from 'components/common/buttons/UploadButton';

function FileUploadButton({ component, children, onFileSelected, uploading, disabled, accept, maxSize, minSize, ...rest }) {
  const { t } = useTranslation();
  const addToast = useToast();
  const Component = component || UploadButton
  const defaultTitle = !component && uploading ? t("General.Uploading") : t("General.Upload")

  const onInputFileSelected = useCallback(({ target }) => {
    const { validity, files: [file] } = target

    if (!validity.valid) {
      // Ignore, no validation used on input field
      return;
    }

    if (accept && !accepts(file, accept)) {
      addToast(t('File.InvalidType', { accept }), 'error')
      return;
    }

    if (maxSize && file.size > maxSize) {
      addToast(t('File.TooLarge', { maxSize: (maxSize / 1024) > 1024 ? (maxSize / (1024 * 1024)).toFixed(2)+ "MB" : (maxSize / 1024) + "KB"  }), 'error');
      return;
    }

    if (minSize && file.size < minSize) {
      addToast(t('File.TooSmall', { minSize: (minSize / 1024) > 1024 ? (minSize / (1024 * 1024)).toFixed(2) + "MB" : (minSize / 1024) + "KB"}), 'error');
      return;
    }

    // Reset input value to allow re-seletion
    target.value = null;

    onFileSelected(file);
  }, [onFileSelected, accept, maxSize, minSize, addToast, t])

  return (
    <Component
      variant="contained"
      component="label"
      disabled={uploading || disabled}
      title={defaultTitle}
      {...rest}>
      {children}
      <input
        type="file"
        accept={accept}
        style={{ display: "none" }}
        onChange={onInputFileSelected}
      />
    </Component>
  );
}

FileUploadButton.propTypes = {
  component: PropTypes.object,
  children: PropTypes.node,
  onFileSelected: PropTypes.func,
  uploading: PropTypes.bool,
  disabled: PropTypes.bool,
  accept: PropTypes.string,
  minSize: PropTypes.number,
  maxSize: PropTypes.number
};

export default FileUploadButton;