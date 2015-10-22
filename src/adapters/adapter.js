/**
 * Adapter abstract class for extension with supported drivers.
 *
 * @class Adapter
 * @license MIT
 */


/**
 * Creates an abstract adapter.
 *
 * @param {object} config - the configuration parameters for the adapter
 *
 * @returns {Adapter} the Adapter class
 */
function Adapter(config) {
    
    return {
        
        /**
         * Configuration object for the adapter.
         * @var {Object} config
         */
        config,
        
        
        /**
         * Connects to the configured database driver.
         *
         * @returns {Boolean} true if connection was successful, false if not
         * @api public
         */
        connect() {
            return false;
        },
        
        
        /**
         * Closes a connection to the configured database driver.
         *
         * @api public
         */
        close() {
        },
        
        
        /**
         * Whether an actual connection to the database is established.
         *
         * @returns {Boolean} true if connected, false if not
         * @api public
         */
        isConnected() {
            return false;
        },
        
        
        /**
         * Performs an, optionally parameterized, query on the database.
         *
         * @param {String} query - the SQL query
         * @param {?Object} params - any parameters for the query
         *
         * @returns {Statement} the query represented in a Statement object
         * @api public
         */
        query(query, params) {
            return null;
        },
        
        
        /**
         * Prepares a statement for execution.
         *
         * @param {String} stmt - the SQL statement to execute
         *
         * @returns {Statement} an unexecuted Statement object
         * @api public
         */
        prepare(stmt) {
            return null;
        },
        
        
        /**
         * Executes a Closure within a transaction.  Exceptions thrown within the transaction Closure will result in a
         * rollback.  Any thrown exceptions will be bubbled.
         *
         * @param {Function} transaction - the transactional Closure to execute
         *
         * @returns {?} the result of the Closure provided
         * @api public
         */
        transact(transaction) {
            return transaction();
        },
        
        
        /**
         * Quote a string so it can be safely used as a table or column name, even if reserved.
         *
         * @param {String} str - the string to quote
         *
         * @returns {String} the quoted string
         * @api public
         */
        quote(str) {
            return str;
        },
        
        
        /**
         * Returns the ID of the last inserted row.
         *
         * @returns {String} the last inserted ID
         * @api public
         */
        lastInsertId() {
            return 0;
        }
        
    };
    
}


module.exports = Adapter;
