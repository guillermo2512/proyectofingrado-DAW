
package controlador;

import java.math.BigDecimal;
import java.util.Iterator;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.Session;
import org.hibernate.Transaction;
import Hibernate.*;


public class union 
{
    public void altaclientes(Clientes client)
    {
        SessionFactory sesion = HibernateUtil.getSessionFactory();
        Session session; 
        session = sesion.openSession();
        Transaction tx = session.beginTransaction();
        session.save(client);
        tx.commit();
        session.close();
    }
}
