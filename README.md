# react-classic-wysiwyg-editor

[![NPM](https://img.shields.io/npm/v/react-classic-wysiwyg-editor.svg)](https://www.npmjs.com/package/react-classic-wysiwyg-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a simple classic wysiwyg (What-You-See-Is-What-You-Get) editor for react.

## Install

```bash
npm install react-classic-wysiwyg-editor
```

## Usage

```jsx
import { useState } from 'react'
import { Editor } from 'react-classic-wysiwyg-editor'
import 'react-classic-wysiwyg-editor/dist/index.css'

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

## Live Playground

OR

To run that demo on your own computer:

- npm install react-classic-wysiwyg-editor
- npm start
- Visit http://localhost:3000/
