class Cat:
    # Class Attribute = applies to all cats
    species = "Mammal"

    # Instance attributes = different each cat
    def __init__(self, name, age):
        super().__init__()
        self.name = name
        self.age = age

    # Instance method
    def description(self):
        return "{} is {} years old.". format(self.name, self.age)

gus = Cat("Gus", 10)
beans = Cat("Beans", 11)

print(gus.description())
print(beans.description())