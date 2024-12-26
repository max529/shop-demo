import type { Meta, Story } from '@aventusjs/storybook'
import Template from './Utilisateur_.mdx'

const meta: Meta = {
	title: 'Data/Utilisateur',
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
  "name": "Utilisateur",
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
      "name": "NomUtilisateur",
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
