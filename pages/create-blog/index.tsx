import React, {
  ChangeEvent,
  ChangeEventHandler,
  DetailedHTMLProps,
  DragEvent,
  HTMLAttributes,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import parse from "html-react-parser";
import dynamic from "next/dynamic";
import MainLayout from "@layout/MainLayout";
import { FormInput } from "@molecules/FormInput";
import { modules } from "@utils/quillModule";
import Button from "@atoms/Button";
import BodyContainer from "@atoms/BodyContainer";

type TDrag = {
  preventDefault: () => void;
  stopPropagation: () => void;
  type: string;
};


const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const CreateBlog = () => {
  // const editorRef = useRef();
  // const [editorLoaded, setEditorLoaded] = useState(false);
  const [content, setContent] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState({});

  const inputRef = useRef(null);

  const handleFiles = (file: React.SetStateAction<{}>) => {
    setFile(file);
  };

  console.log(file);
  console.log(parse(content));
  //handle drag event
  const handleDrag = (e: TDrag) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e: DragEvent<HTMLInputElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };
  

  // triggers when file is selected with click
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

 
  return (
    <>
      <BodyContainer className="">
        <div className="flex flex-col justify-center items-center pt-14">
          <h1 className="mb-3">Upload Blog Post</h1>
          <p className="text-xl">
            This blog post will be visible to all visitors of the Cafe One
            website{" "}
          </p>
        </div>
        <form onDragEnter={handleDrag} className="space-y-6 pb-3">
          <FormInput
            type="file"
            id="blogImage"
            labelContent="Blog Image"
            onChange={handleChange}
            ref={inputRef}
          >
            <p className="text-app-gray_2 text-xl">Drag and drop an image or</p>
            {/* <button className="text-app-red text-lg" onClick={onButtonClick}> */}
            <p className="text-app-red text-lg">Select file</p>
            {/* </button> */}
          </FormInput>
          <FormInput
            type="text"
            labelContent="Blog Title"
            placeholder="Blog Title"
          />
          <QuillNoSSRWrapper
            placeholder="Blog Content"
            modules={modules}
            onChange={setContent}
            theme="snow"
          />
          {dragActive && (
            <div
              className="absolute w-[100%] h-[100%] inset-0"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></div>
          )}
          <div className="flex justify-end space-x-4">
            <Button className="bg-blog-cancel text-app">Cancel</Button>
            <Button>Upload Post</Button>
          </div>
        </form>
      </BodyContainer>
    </>
  );
};

CreateBlog.getLayout = (page: ReactElement) => {
  return <MainLayout className="mt-40 bg-app-gray_5">{page}</MainLayout>;
};
export default CreateBlog;

// pt-10 px-16

// const { CKEditor, ClassicEditor } = editorRef.current || {};

// useEffect(() => {
//   editorRef.current = {
//     CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
//     ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
//   };
//   setEditorLoaded(true);
// }, []);

// {
//   dragActive && (
//     <div
//       className="absolute w-[100%] h-[100%] inset-0"
//       onDragEnter={handleDrag}
//       onDragLeave={handleDrag}
//       onDragOver={handleDrag}
//       onDrop={handleDrop}
//     ></div>
//   );
// }
// {
//   editorLoaded ? (
//     <CKEditor editor={ClassicEditor} data="<p>Hello from CKEditor 5!</p>" />
//   ) : (
//     <p>Loading...</p>
//   );
// }
