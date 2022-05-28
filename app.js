// Import the Google Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');

// Create a client
const bigqueryClient = new BigQuery();
/*async function queryStackOverflow() {
    // Queries a public Stack Overflow dataset.
  
    // Create a client
    const bigqueryClient = new BigQuery();
  
    // The SQL query to run
    const sqlQuery = `SELECT
      CONCAT(
        'https://stackoverflow.com/questions/',
        CAST(id as STRING)) as url,
      view_count
      FROM \`bigquery-public-data.stackoverflow.posts_questions\`
      WHERE tags like '%google-bigquery%'
      ORDER BY view_count DESC
      LIMIT 10`;
  
    const options = {
      query: sqlQuery,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'US',
    };
  
    // Run the query
    const [rows] = await bigqueryClient.query(options);
  
    console.log('Query Results:');
    rows.forEach(row => {
      const url = row['url'];
      const viewCount = row['view_count'];
      console.log(`url: ${url}, ${viewCount} views`);
    });
  }*/
//queryStackOverflow();
// Import the Google Cloud client library
/*async function listDatasets() {
  // Lists all datasets in current GCP project.

  // Lists all datasets in the specified project
  const [datasets] = await bigqueryClient.getDatasets();
  console.log('Datasets:');
  datasets.forEach(dataset => console.log(dataset.id));
}*/

//listDatasets();

/*async function getDataset() {
    // Retrieves dataset named "my_dataset".
  
     const datasetId = "nodoslukas";
  
    // Retrieve dataset reference
    const [dataset] = await bigqueryClient.dataset(datasetId).get();
  
    console.log('Dataset:');
    console.log(dataset.metadata.datasetReference);
  }*/
  //getDataset();

  async function insertRowsAsStream() {
    // Inserts the JSON objects into my_dataset:my_table.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
     const datasetId = 'sensores';
     const tableId = 'devices';
     let date_ob = new Date();
    const rows = [
      {devices: 'test001', s1: 23.56546, s2: 33.5457},
      {devices: 'test002', s1: 12.213, s2: 23.324345}
    ];
    try{
       await bigqueryClient.dataset(datasetId).table(tableId).insert(rows);
    }
    catch(err) {
        console.log(err);
    }
    // Insert data into a table
    
    //console.log(`Inserted ${rows.length} rows`);
  }
  // [END bigquery_table_insert_rows]
  //insertRowsAsStream();
  const dataset = bigqueryClient.dataset('sensores');
  const table = dataset.table('devices');
  
  table.insert({
    devices: 'device001',
    s1: 34.21,
    s2: 12.34
  });

  console.log("Test BigQuery");