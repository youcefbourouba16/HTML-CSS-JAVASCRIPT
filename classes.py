#we dont want flight to be overbooked
class flight:
    def __init__(self, capacity):
        self.capacity= capacity
        self.passengers= []
    def add_passengers(self, name):
        # if open_sreat == 0 
        if not self.open_seats():
            return False
        self.passengers.append(name)
        return True

    def open_seats(self):
        return self.capacity - len(self.passengers)

f= flight(3)
names= []
while True:
    name= input("\nEnter the name of the passanger  : ")
    names.append(name)
    choise= input("Enter anothe one ?  (Y / N) : ")
    if choise.capitalize() == "N":
        break
    
for person in names:
    success = f.add_passengers(person)  
    if success:  
        print(f"\nadded {person} to flight succsfuly\n")
    else:
        print(f"\n NO availible seats for {person}\n") 
         


