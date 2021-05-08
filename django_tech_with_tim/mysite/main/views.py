from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import ToDoList, Item
from .forms import CreateNewList

def index(response, id):
    ls = ToDoList.objects.get(id=id)
    
    if response.user.is_authenticated:
        if ls in response.user.todolist.all():
            if response.method == "POST":
                print(response.POST)
                if response.POST.get("save"):
                    for item in ls.item_set.all():
                        print(response.POST.get(f"c{item.id}"))
                        if response.POST.get(f"c{item.id}") == "clicked":
                            item.complete = True
                        else:
                            item.complete = False
                        item.save()
                elif response.POST.get("new_item"):
                    txt = response.POST.get("new")
                    if len(txt) > 2:
                        ls.item_set.create(text=txt, complete=False)
                    else:
                        print("invalid input")
                    
            # item = ls.item_set.get(id=1)
            return render(response, "main/list.html", {"ls": ls})
    return render(response, "main/view.html", {})

def home(response):
    return render(response, "main/home.html", {})

def create(response):
    if response.method == "POST":
        form = CreateNewList(response.POST)
        if response.user.is_authenticated:
            if form.is_valid():
                t = ToDoList(name=form.cleaned_data["name"])
                t.save()
                response.user.todolist.add(t)
            return HttpResponseRedirect("/%i" %t.id)
    else:
        form = CreateNewList()
    return render(response, "main/create.html", {"form": form})

def view(response):
    return render(response, "main/view.html", {})