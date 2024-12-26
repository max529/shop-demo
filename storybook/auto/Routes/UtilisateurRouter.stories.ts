import type { Meta, Story } from '@aventusjs/storybook'
import Template from './UtilisateurRouter_.mdx'

const meta: Meta = {
	title: 'Routes/UtilisateurRouter',
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
  "name": "UtilisateurRouter",
  "namespace": "Shop.Routes",
  "extends": {
    "kind": "simple",
    "name": "AventusSharp.Routes.StorableRouter",
    "generics": [
      {
        "kind": "simple",
        "name": "Utilisateur",
        "ref": "Data/Utilisateur"
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
