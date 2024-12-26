using AventusSharp.Data;

namespace Shop.Data;


public class Categorie : Storable<Categorie>
{
    public required string Nom { get; set; }

}