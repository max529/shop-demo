using AventusSharp.Data;

namespace Shop.Data;

public class Utilisateur : Storable<Utilisateur>
{
    public required string NomUtilisateur { get; set; }
    
}