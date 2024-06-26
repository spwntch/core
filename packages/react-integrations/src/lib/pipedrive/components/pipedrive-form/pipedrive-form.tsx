import useScript from '../../../utils/use-script';

interface PipedriveFormProps {
  formId?: string;
}

export const PipedriveForm = ({ formId }: PipedriveFormProps) => {
  useScript('https://webforms.pipedrive.com/f/loader');
  return (
    <div
      className="pipedriveWebForms"
      data-pd-webforms="https://webforms.pipedrive.com/f/c6CWqx9lufmNwKC7yKXVAXc99QdyMQZhGKNouMh7U00Eki439PXuvUJRJ5BpnTSzGr"
    ></div>
  );
};

export default PipedriveForm;
