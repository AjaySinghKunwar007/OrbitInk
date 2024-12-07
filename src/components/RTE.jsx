import React from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { conf } from "../conf/conf";
export default function RTE({
  name = "content",
  label,
  control,
  defaultValue = "",
}) {
  return (
    <div className=" w-full">
      {/* Optional label */}
      {label && (
        <label className="inline-block text-sm font-medium mb-1 pl-1 text-gray-300">{label}</label>
      )}
      {/* Rich Text Editor controlled by react-hook-form */}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue} // Initialize the form with a default value
        render={({ field: { onChange, value } }) => (
          <Editor
            value={value} // Bind current value to the editor
            apiKey={conf.tinyMceApiKey}
            init={{
              skin: "oxide-dark",
              content_css: "dark",

              height: "400",
              menubar: true,
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
                "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange} // Update react-hook-form value
          />
        )}
      />
    </div>
  );
}
