import sqlite3


db_name = './database/db.db'


connection = sqlite3.connect(db_name)
cursor = connection.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS candidate  (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        age INTEGER
    )
''')
connection.commit()
connection.close()
def save_new_user(username, email, age):
    global db_name
    connection = sqlite3.connect(db_name)
    cursor = connection.cursor()
    cursor.execute('''
        INSERT INTO candidate  (username, email, age)
        VALUES (?, ?, ?)
    ''', (username, email, age))
    new_user_id = cursor.lastrowid
    connection.commit()
    connection.close()
    return new_user_id
def get_user_by_id(user_id):
    global db_name
    connection = sqlite3.connect(db_name)
    cursor = connection.cursor()
    cursor.execute('''
        SELECT * FROM candidate WHERE id = ?
    ''', (user_id,))
    user = cursor.fetchone()
    connection.close()
    return user



