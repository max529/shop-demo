import type { Meta, Story } from '@aventusjs/storybook'
import Template from './Produit_.mdx'

const meta: Meta = {
	title: 'Data/Produit',
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
  "name": "Produit",
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
      "name": "CodeBarre",
      "accessibility": "public",
      "type": {
        "kind": "simple",
        "name": "string"
      }
    },
    {
      "name": "Prix",
      "accessibility": "public",
      "type": {
        "kind": "simple",
        "name": "number"
      }
    },
    {
      "name": "Categorie",
      "accessibility": "public",
      "type": {
        "kind": "simple",
        "name": "Categorie",
        "ref": "Data/Categorie"
      }
    },
    {
      "name": "Commentaires",
      "accessibility": "public",
      "type": {
        "kind": "simple",
        "name": "Commentaire",
        "isArray": true,
        "ref": "Data/Commentaire"
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
