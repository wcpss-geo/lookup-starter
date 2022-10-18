# Lookup Starter

## Description

This repository contains the starter files for creating a standard autocomplete-powered lookup interface. It does make any assumptions about what users will be searching though typically at WCPSS this is addresses.

## Getting Started

### Create a new GitHub repository from template

*Note: This requires being a member of the wcpss-geo GitHub organization.*

1. Navigate to [https://github.com/wcpss-geo](https://github.com/wcpss-geo)
2. Click the green button to create a new repository.
3. On the *Create new repository* page, find **wcpss-geo/lookup-starter** in the *Repository template* dropdown and select.
4. Continue as usual with creating your new repository making sure to assign ownership to the proper user/organization and to give the repository a unique name.

### Create locally

1. Download the .zip file of this repo.
2. Extract the files onto your computer somewhere where you want to do your development.
3. Rename the parent directory containing all the starter files to something meaninful.
4. Initialize git on the parent directory (Optional)

## Dependencies

Effort has gone into reducing the number of dependencies needed to get started with this lookup.

### Pre-packaged

The following dependencies come pre-packaged with this starter template. In other words, the dependencies will be hosted on the server along with the application that uses this template. The dependency files can be found in the `lib` directory.

- [Bootstrap 5](https://getbootstrap.com/) (v5.2): This provides the framework for UI styling. It provides a simple way to scaffold a mobile-first, responsive page. Mobile-first design is important for WCPSS lookups as well over half of visitors to our pages do so on their phone.

- [autocomplete](https://tomik23.github.io/autocomplete/) (v1.8.5): Provides autocomplete lookup functionality. While there are a variety of autocomplete libraries avaiable, this particular implementation is well-documented and has performed well overall.

### CDN

The following dependencies pull resources from a CDN (Content Delivery Network).

- [Bootstrap Icons](https://icons.getbootstrap.com/)


