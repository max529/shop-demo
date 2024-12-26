using AventusSharp.Data;
using AventusSharp.Data.Attributes;

namespace Shop.Data;

public class Produit : Storable<Produit>
{
    public required string Nom { get; set; }
    public required string CodeBarre { get; set; }
    public required float Prix { get; set; }
    public required Categorie Categorie { get; set; }

    [ReverseLink, AutoCRUD]
    public List<Commentaire> Commentaires { get; set; } = new List<Commentaire>();
    
}
