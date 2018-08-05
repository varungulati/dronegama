from django.template import RequestContext
from django.shortcuts import render_to_response, render, redirect
from forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout

from accounts.models import UserProfileModel


def index(request):
    # Request the context of the request.
    # The context contains information such as the client's machine details, for example.
    context = RequestContext(request)

    # Construct a dictionary to pass to the template engine as its context.
    # Note the key boldmessage is the same as {{ boldmessage }} in the template!

    # Return a rendered response to send to the client.
    # We make use of the shortcut function to make our lives easier.
    # Note that the first parameter is the template we wish to use.
    #return render_to_response('index.html', context_dict, context)
    return render(request, 'index.html')

def api(req):
  return render_to_response('api.html')


def register(req):
  if req.method == 'POST':
    form = UserCreationForm(req.POST)
    if form.is_valid():
      user_save = form.save()
      username = form.cleaned_data['username']
      password = form.cleaned_data['password1']
      user = authenticate(username=username, password=password)
      login(req, user)
      UserProfileModel.objects.create(user=user_save)
      return redirect('index')
  else:
    form = UserCreationForm()
  context = {'form': form}
  return render(req, 'registration/register.html', context)

def logout_view(request):
  logout(request)
  # Redirect to a success page.
