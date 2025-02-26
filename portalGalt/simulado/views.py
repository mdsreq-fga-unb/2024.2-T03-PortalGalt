from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .serializers import FileUploadSerializer
from .analiser import simuladoAanaliser
from .models import *
import json

from django.contrib.auth.models import Group, User
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


@csrf_exempt
@api_view(['POST'])
def fileUpload(request):
    corrigido = simuladoAanaliser(gabarito=request.data["gabarito"], respostas=request.data["respostas"], nome=request.data["nome"]
                                  , ano=request.data["ano"], mes=request.data["mes"], dia=request.data["dia"])

    return Response({"datail": "ok!"}, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def getListSimulados(request, aluno):
    if aluno == "null":
        simulados = Simulado.objects.all()
        retorno = {}
        for s in simulados:
            retorno[s.nome] = {}
            notas = Nota.objects.filter(simulado=s)
            for n in notas:
                retorno[s.nome][n.aluno.username] = json.loads(n.questoes)
        return Response({"lista_simulados":retorno}, status=status.HTTP_200_OK)
    else:
        user = User.objects.get(username=aluno)
        alunos = Nota.objects.filter(aluno=user)
        simulados = {}
        for a in alunos:
            s = a.simulado.nome
            dic = {}
            dic[a.aluno.username] = a.questoes
            simulados[s] = dic.copy()

        return Response({"lista_simulados":simulados}, status=status.HTTP_200_OK)


@api_view(['GET'])
def getSimulado(request, simuladoNome):
    print(simuladoNome)
    simulado = Simulado.objects.get(nome=simuladoNome)
    return Response({"simulado":{"nome":simulado.nome, "ano":simulado.ano, "mes":simulado.mes, "dia":simulado.dia}},status=status.HTTP_200_OK)


@api_view(['GET'])
def getAllSimulado(request):

    simulados = Simulado.objects.all()
    lista = []
    
    for s in simulados:
        retorno = {}
        retorno["nome"] = s.nome
        retorno["data"] = f"{s.ano}-{s.mes}-{s.dia}"
        retorno["gabarito"] = ""
        retorno["respostas"] = ""
        lista.append(retorno.copy())
    
    return Response({"simulado":lista},status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['PUT'])
def updateSimulado(request):
    corrigido = simuladoAanaliser(gabarito=request.data["gabarito"], respostas=request.data["respostas"], nome=request.data["nome"],
                                  ano=request.data["ano"],mes=request.data["mes"], dia=request.data["dia"], update=request.data["nome_antigo"])

    return Response({"detail": "ok"}, status=status.HTTP_200_OK)