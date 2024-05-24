import { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
// import { Button, Input, Textarea } from '../ui';

interface TemplateEditorProps {
  initialData: any;
  onDataChange: (newData: any) => void;
}

const TemplateEditor: React.FC<TemplateEditorProps> = ({
  initialData,
  onDataChange,
}) => {
  const [data, setData] = useState(initialData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onDataChange(data);
    // Add logic to save or publish the template data here
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold mb-1">
              Title
            </label>
            <Input
              id="title"
              name="title"
              value={data.title}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold mb-1">
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              value={data.description}
              onChange={handleChange}
              rows={5}
              className="w-full"
            />
          </div>
          {/* Add more input fields for other data properties */}
        </div>
        <div>
          {/* Render the template preview here */}
          <div className="bg-gray-200 p-4 rounded-md">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};

export default TemplateEditor;
