import React from 'react';
import { useHistory } from 'react-router-dom'; // Importez useHistory
import { Form, Field } from 'react-final-form';
import Modal from '@material-ui/core/Modal';
import Section from '../../widgets/Section';
import RenderTextInput from '../../Renderers/RenderTextInput';
import { PrimaryButton, DangerButton, SecondaryButton } from '../../widgets/Buttons/Buttons'; // Assurez-vous d'importer DangerButton
import styles from './video.module.scss';
import { palette } from '../../muiTheme';

function VideoView({
  onSubmit = () => {},
  isOpen = false,
  setIsOpen = () => {},
  setDetail = () => {},
  isEdit = false,
  setIsEdit = () => {},
  title = '',
  description = '',
}) {
  const history = useHistory();

  const handleCancel = () => {
    setIsEdit(false);
    setDetail({ title, description });
  };

  const handleBack = () => {
    history.push('/videos');
  };

  const initialValues = isEdit ? { title, description } : {};

  return (
    <div style={{ padding: '0px 10px' }}>
      <Section label="Video">
        <SecondaryButton label="Back to Videos" type="button" onClick={handleBack} />
        <div
          style={{
            backgroundColor: palette.primary.main,
            height: 300,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            marginTop: '20px',
          }}></div>

        {isEdit ? (
          <Form onSubmit={onSubmit} initialValues={initialValues}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className={styles.formEdit}>
                <Field name="title" label="Title" type="input" component={RenderTextInput} />
                <Field
                  name="description"
                  label="Description"
                  type="input"
                  component={RenderTextInput}
                />
                <div className={styles.buttonContainer}>
                  <PrimaryButton label="Confirm" type="submit" />
                  <DangerButton label="Cancel" type="button" onClick={handleCancel} />
                </div>
              </form>
            )}
          </Form>
        ) : (
          <>
            <h1 className={styles.titleH1}>Title : {title}</h1>
            <h2 className={styles.descriptionH2}>
              Description : {description || 'No description'}
            </h2>
            <PrimaryButton
              label="Edit"
              type="button"
              onClick={() => {
                setIsEdit(true);
                setDetail({ title, description });
              }}
            />
          </>
        )}
      </Section>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className={styles.modal}>
          <p>Title : {title}</p>
          <p>Description : {description || 'No description'}</p>
        </div>
      </Modal>
    </div>
  );
}

export default VideoView;
