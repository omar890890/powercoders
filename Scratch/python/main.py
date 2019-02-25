import sqlite3
import csv
import argparse
import os


def parse_arguments():
   parser = argparse.ArgumentParser()
   parser.add_argument('--db', help='Full path to SQLite database to process')
   parser.add_argument('--table', help='Name of table to dump')
   parser.add_argument('--out', help='Full path to CSV file to write')
   parser.add_argument('-f', '--force', action='store_true',
                       help='Overwrite CSV file if it already exists')
   args = parser.parse_args()

   if args.out is None:
       args.out = '{}.csv'.format(args.table)
       print('Writing output to {}'.format(args.out))

   return args


def db_connect(db_filename):
   return sqlite3.connect(db_filename)


def dump_table(db_conn, table, csv_filename):
   # Setup step
   c = db_conn.cursor()

   csvfile = open(csv_filename, 'w')
   csvwriter = csv.writer(csvfile)

   # Get the data step
   for row in c.execute('SELECT * FROM {}'.format(table)):
       csvwriter.writerow(row)

   csvfile.close()

def validate_arguments(args, db_conn):
   # Check to see if the CSV file exists, or exit
   if os.path.exists(args.out) and not args.force:
       print('Error: {} already exists.'.format(args.out))
       print('Delete the file (or use --force) and re-run to produce dump.')
       exit(1)

   # Check to see if the database table exists, or exit
   if not exists_table(db_conn, args.table):
       print('Error: {} table does not exist in {}'.format(args.table, args.db))
       exit(1)


def exists_table(db, name):
   """
   Check to see if table exists in db.
   :param db: Database connection for the database to check
   :param name: Name of the table to look for
   :return: True if the table exists
   """
   query = "SELECT 1 FROM sqlite_master WHERE type='table' and name LIKE ?"
   cursor = db.cursor()
   return cursor.execute(query, (name,)).fetchone() is not None


args = parse_arguments()
db_conn = db_connect(args.db)
validate_arguments(args, db_conn)
dump_table(db_conn, args.table, args.out)
db_conn.close()


