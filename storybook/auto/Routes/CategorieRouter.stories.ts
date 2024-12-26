import type { Meta, Story } from '@aventusjs/storybook'
import Template from './CategorieRouter_.mdx'

const meta: Meta = {
	title: 'Routes/CategorieRouter',
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
  "name": "CategorieRouter",
  "namespace": "Shop.Routes",
  "extends": {
    "kind": "simple",
    "name": "AventusSharp.Routes.StorableRouter",
    "generics": [
      {
        "kind": "simple",
        "name": "Categorie",
        "ref": "Data/Categorie"
      }
    ]
  },
  "methods": [
    {
      "name": "StorableName",
      "accessibility": "public"
    }
  ]
},
}

export default meta;

export const DefaultStory: Story = {}
