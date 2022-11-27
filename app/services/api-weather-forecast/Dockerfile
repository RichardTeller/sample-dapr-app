FROM mcr.microsoft.com/dotnet/sdk:7.0 as build

WORKDIR /app

COPY . /app

RUN dotnet publish api-weather-forecast.csproj -c Release -o /app/out

FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app

COPY --from=build /app/out /app

ENV ASPNETCORE_URLS=http://*:5000

EXPOSE 5000

CMD dotnet api-weather-forecast.dll