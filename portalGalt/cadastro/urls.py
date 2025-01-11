from django.urls import re_path,path
from . import views

urlpatterns = [
    path('login/', views.login, name="login"),
    path('signup/', views.signup, name="signup"),
    path('test_token/', views.test_token, name="test_token"),
    path('hello/', views.hello, name="hello")
]