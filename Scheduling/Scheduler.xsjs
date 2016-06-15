
function ETL()
{
var query = "{CALL <<CDA_4_HANA>>.<<CDA_4_HANA.Scheduling::SP_ETL>>}";
$.trace.debug(query);
var conn = $.db.getConnection();
var pcall = conn.prepareCall(query);
pcall.execute();
pcall.close();
conn.commit();
conn.close();
}

function FactTables()
{
var query = "{CALL <<CDA_4_HANA>>.<<CDA_4_HANA.Scheduling::SP_ETL>>}";
$.trace.debug(query);
var conn = $.db.getConnection();
var pcall = conn.prepareCall(query);
pcall.execute();
pcall.close();
conn.commit();
conn.close();
}