import { ChangeEvent, DragEvent, useState } from "react";
import cx from "classnames";
interface Props {
  onChange: (files: FileList) => void;
}

const FilesUpload: React.FC<Props> = ({ onChange }) => {
  const [active, setActive] = useState(false);
  function onDragOver(ev: DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    setActive(true);
  }
  function onDragLeave(ev: DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    setActive(false);
  }
  function onDrop(ev: DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    setActive(false);
    onChange(ev.dataTransfer.files);
  }
  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    onChange(ev.target.files ?? new FileList());
  }

  return (
    <div
      className="flex items-center justify-center w-full mt-6 pl-4 pr-4"
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <label
        htmlFor="dropzone-file"
        className={cx(
          "flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer",
          {
            "bg-gray-50 hover:bg-gray-100": !active,
            "bg-gray-200": active,
          }
        )}
      >
        <div className="flex flex-col items-center justify-center pt-3 pb-4">
          <img className="pb-2" src="upload-image.svg" alt="" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 poppins-regular">
            <span className="poppins-bold">Clicca per caricare</span> oppure
            trascina
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default FilesUpload;
