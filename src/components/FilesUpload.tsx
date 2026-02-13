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
      className="mt-6 flex w-full items-center justify-center"
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <label
        htmlFor="dropzone-file"
        className={cx(
          "flex h-72 w-full max-w-2xl cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 text-center transition",
          {
            "border-slate-300 bg-white/70 hover:border-slate-400 hover:bg-white":
              !active,
            "border-slate-600 bg-slate-50": active,
          }
        )}
      >
        <img className="w-14 pb-3 opacity-90" src="/upload-image.svg" alt="Upload" />
        <p className="text-sm text-slate-700 sm:text-base">
          <span className="font-semibold">Click to upload</span> or drag and
          drop your image here
        </p>
        <p className="mt-2 text-xs text-slate-500">JPG, PNG or WEBP</p>

        <input
          id="dropzone-file"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default FilesUpload;
