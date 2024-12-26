
using AventusSharp.Data;
using AventusSharp.Data.Attributes;

namespace Shop.Data;

public class Commentaire : Storable<Commentaire>
{
    [Size(SizeEnum.Text)]
    public required string Contenu { get; set; }

    public required DateTime Date { get; set; }

    public required Utilisateur Utilisateur { get; set; }

    [ForeignKey<Produit>]
    public required int ProduitId { get; set; }

}