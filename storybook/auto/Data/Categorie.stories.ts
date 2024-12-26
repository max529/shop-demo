import type { Meta, Story } from '@aventusjs/storybook'
import Template from './Categorie_.mdx'

const meta: Meta = {
	title: 'Data/Categorie',
	parameters: {
        docs: {
            page: Template,
            description: {
                component: ``
            },
        }
    },
    
    
    aventus: {
  "kind": "class",
  "name": "Categorie",
  "namespace": "Shop.Data",
  "extends": {
    "kind": "simple",
    "name": "AventusSharp.Data.Storable"
  },
  "implements": [
    {
      "kind": "simple",
      "name": "Aventus.IData"
    }
  ],
  "properties": [
    {
      "name": "Nom",
      "accessibility": "public",
      "type": {
        "kind": "simple",
        "name": "string"
      }
    },
    {
      "name": "Fullname",
      "accessibility": "public",
      "modifiers": [
        "override",
        "readonly",
        "static"
      ],
      "type": {
        "kind": "simple",
        "name": "string"
      }
    }
  ]
},
}

export default meta;

export const DefaultStory: Story = {}
