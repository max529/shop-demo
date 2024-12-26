import type { Meta, Story } from '@aventusjs/storybook'
import Template from './ProduitRouter_.mdx'

const meta: Meta = {
	title: 'Routes/ProduitRouter',
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
  "name": "ProduitRouter",
  "namespace": "Shop.Routes",
  "extends": {
    "kind": "simple",
    "name": "AventusSharp.Routes.StorableRouter",
    "generics": [
      {
        "kind": "simple",
        "name": "Produit",
        "ref": "Data/Produit"
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
