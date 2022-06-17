import com.basho.riak.client.api.RiakClient;
import com.basho.riak.client.api.commands.kv.DeleteValue;
import com.basho.riak.client.api.commands.kv.FetchValue;
import com.basho.riak.client.api.commands.kv.StoreValue;
import com.basho.riak.client.core.query.Location;
import com.basho.riak.client.core.query.Namespace;
import com.basho.riak.client.core.query.RiakObject;
import com.basho.riak.client.core.util.BinaryValue;

import java.io.PrintStream;
import java.util.concurrent.ExecutionException;

public class Main {
    private static PrintStream stream;

    public static void main(String[] args) throws Exception {
        stream = new PrintStream("komunikaty.txt");

        print("Utworzone połączenie... \n");

        RiakClient client = RiakClient.newClient("127.0.0.1");

        print("\nDokument dodany do bazy... \n");

        Namespace namespace = new Namespace("s16612");
        Location location = new Location(namespace, "Z21");
        RiakObject riakObject = new RiakObject()
                .setContentType("application/json")
                .setValue(BinaryValue.create("{\"Nazwa\":\"PPJ\", \"trudnosc\":2, \"zdawalnosc\":0.40, \"obieralny\":false}"));

        StoreValue store = new StoreValue.Builder(riakObject).withLocation(location).build();
        StoreValue.Response storeResponse = client.execute(store);

        print(String.valueOf(storeResponse));
        print("Dodanie.");

        print("\nWyświetlenie dokumentu... \n");

        readDatabase(client, location);

        print("\nModyfikacja dokumentu...\n");

        FetchValue fetchValue = new FetchValue.Builder(location).build();
        FetchValue.Response response = client.execute(fetchValue);
        riakObject = response.getValue(RiakObject.class);
        riakObject.setValue(BinaryValue.create("{\"Nazwa\":\"PJC\", \"trudnosc\":3, \"zdawalnosc\":0.40, \"obieralny\":false}"));

        StoreValue update = new StoreValue.Builder(riakObject).withLocation(location).build();
        client.execute(update);

        print("Zmodyfikowano.");

        print("\nWyświetlenie dokumentu... \n");

        readDatabase(client, location);

        print("\nUsunięcie dokumentu... \n");

        DeleteValue delete = new DeleteValue.Builder(location).build();
        client.execute(delete);
        print("Usunięto.");

        print("\nPobranie dokumentu... \n");

        readDatabase(client, location);

        print("\nZamknięcie bazy... \n");

        client.shutdown();
        close();
    }

    public static void print(String text) {
        stream.println(text);
    }

    public static void close() {
        stream.close();
    }

    public static void readDatabase(RiakClient client, Location key) throws ExecutionException, InterruptedException {
        FetchValue fetchValue = new FetchValue.Builder(key).build();
        FetchValue.Response response = client.execute(fetchValue);
        if (response.isNotFound())
            print("???");
        else {
            RiakObject riakObject = response.getValue(RiakObject.class);
            print(String.valueOf(riakObject.getValue()));
        }
    }


}
