// import React, { useState } from "react";

// const ImageInput = () => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     setSelectedFile(file instanceof File ? file : null);
//   };

//   return (
//     <form className="file-upload-form w-full flex flex-col gap-[10px] items-center justify-center sm:items-start">
//       <label htmlFor="file" className="file-upload-label">
//         <div className="file-upload-design">
//           {/* Your SVG code here */}
//           <p>Drag and Drop</p>
//           <p>or</p>
//           <span className="browse-button">Browse file</span>
//         </div>
//         <input id="file" type="file" onChange={handleFileChange} />
//       </label>

//       {selectedFile && (
//         <div className="selected-file bg-blue-100 border border-blue-400 text-blue-700 px-4 py-2 rounded mt-2">
//           <p>Selected File: {selectedFile.name || ""}</p>
//         </div>
//       )}
//     </form>
//   );
// };

// export default ImageInput;

import React, { useState, ChangeEvent } from "react";

const ImageInput: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file instanceof File ? file : null);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <form className="file-upload-form w-full flex flex-col gap-[10px] items-center justify-center sm:items-start">
      <label htmlFor="file" className="file-upload-label">
        <div className="file-upload-design">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Selected File"
              className="max-w-[200px] max-h-[200px] object-cover"
            />
          ) : (
            <>
              {/* Your SVG code here */}
              <p>Drag and Drop</p>
              <p>or</p>
              <span className="browse-button">Browse file</span>
            </>
          )}
        </div>
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>

      {selectedFile && (
        <div className="selected-file bg-blue-100 border border-blue-400 text-blue-700 px-4 py-2 rounded mt-2">
          <p>Selected File: {selectedFile.name || ""}</p>
        </div>
      )}
    </form>
  );
};

export default ImageInput;
