package models.persistence.entities;

/**
 * Created by a613794 on 18/03/2016.
 */
import javax.persistence.*;

@Entity
@Table(name = "dbo.T_CONTACT")
public class Contact
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;
}
