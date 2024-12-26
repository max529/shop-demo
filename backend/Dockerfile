# syntax=docker/dockerfile:1

FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build

COPY . /source

WORKDIR /source

ARG TARGETARCH

RUN --mount=type=cache,id=nuget,target=/root/.nuget/packages \
    dotnet publish -a ${TARGETARCH/amd64/x64} --use-current-runtime --self-contained false -o /app



FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS final

COPY --from=build /app .

RUN chown -R $APP_UID /wwwroot

USER $APP_UID

ENTRYPOINT ["dotnet", "Shop.dll"]
