import type { Meta, Story } from '@aventusjs/storybook'
import Template from './CommentaireRouter_.mdx'

const meta: Meta = {
	title: 'Routes/CommentaireRouter',
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
  "name": "CommentaireRouter",
  "namespace": "Shop.Routes",
  "extends": {
    "kind": "simple",
    "name": "AventusSharp.Routes.StorableRouter",
    "generics": [
      {
        "kind": "simple",
        "name": "Commentaire",
        "ref": "Data/Commentaire"
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
