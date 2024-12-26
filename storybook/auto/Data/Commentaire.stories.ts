import type { Meta, Story } from '@aventusjs/storybook'
import Template from './Commentaire_.mdx'

const meta: Meta = {
	title: 'Data/Commentaire',
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
  "name": "Commentaire",
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
      "name": "Contenu",
      "accessibility": "public",
      "type": {
        "kind": "simple",
        "name": "string"
      }
    },
    {
      "name": "Date",
      "accessibility": "public",
      "type": {
        "kind": "simple",
        "name": "Date"
      }
    },
    {
      "name": "Utilisateur",
      "accessibility": "public",
      "type": {
        "kind": "simple",
        "name": "Utilisateur",
        "ref": "Data/Utilisateur"
      }
    },
    {
      "name": "ProduitId",
      "accessibility": "public",
      "type": {
        "kind": "simple",
        "name": "number"
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
