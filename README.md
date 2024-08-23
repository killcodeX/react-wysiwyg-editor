# react-classic-wysiwyg-editor

[![NPM](https://img.shields.io/npm/v/react-classic-wysiwyg-editor.svg)](https://www.npmjs.com/package/react-classic-wysiwyg-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a simple classic wysiwyg (What-You-See-Is-What-You-Get) editor for react.

## Install

```bash
npm install react-classic-wysiwyg-editor
```

## Usage

```jsx
import React from 'react'
import { Editor } from 'react-classic-wysiwyg-editor'

const Example = () => {
  const [content, setContent] = useState('')
  return (
    <>
      <h1>WYSIWYG Editor</h1>
      <Editor setContent={setContent} />
      <h2>Saved Content:</h2>
      {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
    </>
  )
}
```

## License

MIT © [](https://github.com/)

## Keywords

react wysiwyg editor
