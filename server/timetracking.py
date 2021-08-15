import pyrebase
import datetime
from datetime import timedelta
from datetime import datetime
config= {
    "apiKey": "AIzaSyDKHTAcwlRe2IjRJMbMEDacGLAvf5SJofw",
    "authDomain": "timetracking9.firebaseapp.com",
    "projectId": "timetracking9",
    "storageBucket": "timetracking9.appspot.com",
    "messagingSenderId": "92083990503",
    "appId": "1:92083990503:web:827c13fc9c685be4821742",
    "measurementId": "G-FP0JH9FC4K",
    "databaseURL" : "https://timetracking9-default-rtdb.asia-southeast1.firebasedatabase.app/"
        }

firebase = pyrebase.initialize_app(config)
database = firebase.database()
ticket = "100-Misha Mohan"
start_date = datetime.strptime("2021-07-01", '%Y-%m-%d').date()
end_date = datetime.strptime("2021-07-03", '%Y-%m-%d').date()
results = database.child("timetracking9-default-rtdb").child("Employees").child(ticket).get()

total_time = timedelta(hours=0, minutes=0, seconds=0)
def total_working_time(time):
    global total_time
    t = datetime.strptime(time,"%H:%M:%S")
    delta = timedelta(hours=t.hour, minutes=t.minute, seconds=t.second)
    total_time = total_time+delta

day_count = (end_date - start_date).days + 1

for single_date in (start_date + timedelta(n) for n in range(day_count)):
    date = single_date.strftime('%Y-%m-%d')
    for item in results.each():
        if date==item.key():
            time= item.val()
            total_working_time(time)

print(total_time)






