FROM mcr.microsoft.com/dotnet/sdk:7.0 as build

WORKDIR /app

COPY . /app

RUN dotnet publish api-weather-forecast.csproj -c Release -o /app/out

FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app

COPY --from=build /app/out /app

ENV ASPNET_URLS=http://localhost:5110

EXPOSE 5110

CMD dotnet run api-weather-forecast.dll