import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    // <div>
    //   <Editor
    //     initialValue="defaul value"
    //     init={{
    //       branding: false,
    //       height: 500,
    //       plugins: [
    //         "advlist",
    //         "autolink",
    //         "lists",
    //         "link",
    //         "image",
    //         "charmap",
    //         "preview",
    //         "anchor",
    //         "searchreplace",
    //         "visualblocks",
    //         "code",
    //         "fullscreen",
    //         "insertdatetime",
    //         "media",
    //         "table",
    //         "help",
    //         "wordcount",
    //       ],
    //       toolbar:
    //         "undo redo | blocks | " +
    //         "bold italic backcolor | alignleft aligncenter " +
    //         "alignright alignjustify | bullist numlist outdent indent | " +
    //         "removeformat | help",
    //     }}
    //   />
    // </div>
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              menubar: true,
              height: 500,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
