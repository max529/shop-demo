using Shop.Data;

namespace Shop.DB;

public class Seeder
{
    public void CreateDemoDB()
    {
        CreateUtilisateurs();
        CreateCategories();
        CreateProduits();
        CreateCommentaires();
    }

    private void CreateUtilisateurs()
    {
        List<Utilisateur> utilisateurs = new List<Utilisateur>()
        {
            new Utilisateur() { NomUtilisateur = "Minimax" },
            new Utilisateur() { NomUtilisateur = "UserTest1" },
            new Utilisateur() { NomUtilisateur = "UserTest2" }
        };

        Utilisateur.Create(utilisateurs);
    }

    private void CreateCategories()
    {
        List<Categorie> categories = new List<Categorie>()
        {
            new Categorie() { Nom = "Électronique" },
            new Categorie() { Nom = "Vêtements" },
            new Categorie() { Nom = "Alimentation" }
        };

        Categorie.Create(categories);
    }

    private void CreateProduits()
    {
        List<Categorie> categories = Categorie.GetAll();

        List<Produit> produits = new List<Produit>()
        {
            new Produit() { Nom = "Smartphone", CodeBarre = "1234567890123", Prix = 699.99f, Categorie = categories.First(c => c.Nom == "Électronique") },
            new Produit() { Nom = "T-Shirt", CodeBarre = "1234567890124", Prix = 19.99f, Categorie = categories.First(c => c.Nom == "Vêtements") },
            new Produit() { Nom = "Pâtes", CodeBarre = "1234567890125", Prix = 1.99f, Categorie = categories.First(c => c.Nom == "Alimentation") }
        };

        Produit.Create(produits);
    }

    private void CreateCommentaires()
    {
        List<Utilisateur> utilisateurs = Utilisateur.GetAll();
        List<Produit> produits = Produit.GetAll();

        List<Commentaire> commentaires = new List<Commentaire>()
        {
            new Commentaire() {
                Contenu = "Super produit, je recommande !",
                Date = DateTime.Now,
                Utilisateur = utilisateurs.First(u => u.NomUtilisateur == "Minimax"),
                ProduitId = produits.First(p => p.Nom == "Smartphone").Id
            },
            new Commentaire() {
                Contenu = "Pas mal, mais un peu cher.",
                Date = DateTime.Now,
                Utilisateur = utilisateurs.First(u => u.NomUtilisateur == "UserTest1"),
                ProduitId = produits.First(p => p.Nom == "Smartphone").Id
            },
            new Commentaire() {
                Contenu = "Qualité médiocre, très déçu.",
                Date = DateTime.Now,
                Utilisateur = utilisateurs.First(u => u.NomUtilisateur == "UserTest2"),
                ProduitId = produits.First(p => p.Nom == "T-Shirt").Id
            }
        };

        Commentaire.Create(commentaires);
    }
}
