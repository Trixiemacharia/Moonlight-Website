import os, django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'moonlite_backend.settings')
django.setup()
from restaurant.models import MenuCategory, MenuItem, Review
Clear existing
MenuCategory.objects.all().delete()
Review.objects.all().delete()
cats = [
    ("Grills & Mains", 1, [
        ("1/4 Grilled Chicken", "Succulent quarter chicken, perfectly seasoned and flame-grilled to perfection", 650, True),
        ("1/2 Grilled Chicken", "Half chicken, slow-grilled with our signature herb marinade", 1100, True),
        ("Grilled Salmon Atlantis", "Atlantic salmon fillet, grilled with lemon-herb butter and seasonal vegetables", 1450, True),
        ("Lamb Mandi", "Slow-cooked tender lamb on fragrant spiced rice, Middle Eastern style", 1300, True),
        ("Arosto Goat", "Slow-roasted goat meat, Kenyan style with pilau spices", 1200, False),
        ("Medium Rare Steak", "Premium beef steak, seared to a perfect medium rare with garlic butter", 1800, True),
        ]),
        ("Pizzas", 2, [
            ("Mexican Chicken Pizza", "Spiced chicken, jalapeños, bell peppers, mozzarella on hand-tossed crust", 900, True),
            ("Pepperoni Classic", "Generous pepperoni, tomato base, mozzarella, fresh basil", 850, False),
            ("Veggie Supreme", "Roasted seasonal vegetables, feta, olives, sun-dried tomatoes", 800, False),
            ]),
            ("Pasta & Salads", 3, [
                ("Carbonara Pasta", "Creamy egg-based sauce, crispy pancetta, parmesan, black pepper", 750, True),
                ("Salmon Salad", "Seared salmon, mixed greens, capers, red onion, lemon-dill dressing", 950, True),
                ("Caesar Salad", "Romaine lettuce, anchovy dressing, parmesan shavings, house croutons", 600, False),
                ]),
                ("Sides", 4, [
                    ("French Fries with Goat", "Crispy golden fries served with tender goat meat pieces", 700, True),
                    ("Fries and 1/4 Chicken", "Golden fries paired with a quarter grilled chicken", 850, True),
                    ("Chapati (3 pcs)", "Soft, layered flatbread, freshly made", 150, False),
                    ("Steamed Rice", "Fluffy basmati rice", 200, False),
                    ]),
                    ("Drinks & Cocktails", 5, [
                        ("Passion Mojito", "Passion fruit, fresh mint, lime juice, soda water — refreshingly tropical", 550, True),
                        ("Moonlite Infusion", "House signature blend of tropical fruits and herbs", 600, True),
                        ("Coffee Latte", "Smooth espresso with velvety steamed milk", 350, False),
                        ("Milkshakes", "Thick creamy milkshakes — chocolate, vanilla, or strawberry", 450, True),
                        ("Fresh Juice", "Blended seasonal fruits, no added sugar", 350, False),
                        ]),
                        ("Ethiopian & International", 6, [
                            ("Injera Combo", "Traditional Ethiopian flatbread with three stew choices", 950, False),
                            ("Tibs", "Sautéed beef or lamb with onions, rosemary, and spiced butter", 1100, False),
                            ]),
                            ]
for cat_name, order, items in cats:
    cat = MenuCategory.objects.create(name=cat_name, order=order)
    for item in items:
        name, desc, price, popular = item
        MenuItem.objects.create(category=cat, name=name, description=desc, price=price, is_popular=popular)
Review.objects.create(author="dtads", rating=5, text="Nice food and nice service with a nice atmosphere. The lamb Mandi was nice and good portion size.", date="3 months ago", avatar_initials="DT")
Review.objects.create(author="Yilmaz Emre", rating=4, text="Food is good. Service is good. Nice views of the CBD from the balcony. Clever use of the plants as decoration. Tables are clean. Toilets are good. A nice place to chill in CBD. Highly recommended.", date="10 months ago", avatar_initials="YE")
Review.objects.create(author="Jay K", rating=5, text="I loved the automation of services at the dinner tables. That's a master stroke. The meals portions are surprisingly amazing. The drinks were superb. The staff are friendly. And the atmosphere is extremely quiet given the fact that you are in the CBD.", date="a year ago", avatar_initials="JK")
Review.objects.create(author="Sarah M", rating=5, text="The Mexican Chicken Pizza was absolutely delicious — well flavoured with a crust that's not too thick. The 1/4 grilled chicken was filling and also well flavoured. Will definitely be back!", date="2 years ago", avatar_initials="SM")
Review.objects.create(author="Kevin O", rating=4, text="Great spot for a business lunch. The salmon salad is fresh and the portions are generous. The balcony view of Nairobi CBD is a bonus.", date="6 months ago", avatar_initials="KO")
print("Seed data loaded successfully!")
