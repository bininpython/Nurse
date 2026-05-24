const postgres = require('postgres');
const fs = require('fs');
const path = require('path');

const connectionString = 'postgresql://postgres:Aa9802715008@db.mpgwegqeygaefoskevva.supabase.co:5432/postgres';
const sql = postgres(connectionString);

async function applySchema() {
  try {
    const schemaPath = path.join(__dirname, 'database', 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    console.log('Applying schema...');
    // execute the raw sql using postgres driver
    await sql.unsafe(schema);
    
    console.log('Schema applied successfully.');
  } catch (error) {
    console.error('Error applying schema:', error);
  } finally {
    await sql.end();
  }
}

applySchema();
