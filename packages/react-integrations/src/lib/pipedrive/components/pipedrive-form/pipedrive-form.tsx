import Script from 'next/script';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: any;
  }
}

interface PipedriveFormProps {
  formId: string;
}

export const PipedriveForm = ({ formId }: PipedriveFormProps) => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) return null;
  return (
    <>
      <div
        className="pipedriveWebForms"
        data-pd-webforms="https://webforms.pipedrive.com/f/c6CWqx9lufmNwKC7yKXVAXc99QdyMQZhGKNouMh7U00Eki439PXuvUJRJ5BpnTSzGr"
      >
        <Script src="https://webforms.pipedrive.com/f/loader"></Script>
      </div>
    </>
  );
};

export default PipedriveForm;
