LANDREST Tool
====================

LANDREST is a land degradation model that can be used to spatially identify locations in an area of interest that are in risk of being degraded. It represents interactions between biophysical and socio-economic factors that contribute to degradation.

It was developed to run as an ArcGIS tool based on the ModelBuilder concepts. The general structure behind it is inspired by the CORINE model with variables derived using the USLE. It is flexible enough to accommodate more variables beyond the number and types it was initially designed to handle.

The LANDREST version 0.1 has been thoroughly tested using spatial data captured in Babati district, Tanzania. It offers the following products to address soil degradation:

* **Potential soil erosion risk (PSER):** This is the typical vulnerability of the soil to water erosion without taking into account vegetation cover or land use.
* **Actual soil erosion risk (ASER):** Current risk of erosion under the present land use and vegetation cover conditions. 
* **Soil erosion risk (SER) itself:** This is the present risk of erosion in the area of study under the current human and livestock population distribution.

## Introduction

ArcMap Raster Edit Suite (ARES), previously called ArcMap Raster Editor, is an ArcMap Add-In providing a set of tools in order to improve the convenience of minor raster editing. Its main features include:

It includes two toolbars:

* **Raster Editor** for editing and identifying pixels with given rows and columns.

![Raster Editor](http://haoliangyu.net/images/GIS/ares_editing/eidtor_toolbar.png)

* **Raster Painter** for painting values on the raster layer.

![Raster Painter](http://i59.tinypic.com/25fppig.png)

This addin works in ArcMap 10.0/10.1/10.2, currently not in 10.3. 

## Download & Install

* Download the package at [ARES 0.2.1](https://github.com/dz316424/ares/releases/download/v0.2.1/ARES.0.2.1.zip)

* Unzip the installation file and get into the folder that mathces your ArcMap version.
 
* Double-click the *RasterEditor.esriAddIn* and click *Install Add-In* in the wizzard.

Now you have it. A detailed user guide could be found at [Wiki](https://github.com/dz316424/arcmap-raster-editor/wiki) or my blog articles:

* Raster Editor: ![Editing single pixels of raster layer in ArcMap with just a few clicks](http://haoliangyu.net/editing-single-pixels-of-raster-layer-in-arcmap-with-just-a-few-clicks.html#.VQOzWuFp4S8)

* Raster Painter: ![Yet another way to edit your raster layer in ArcMap: Paint on it!](Yet another way to edit your raster layer in ArcMap: Paint on it!)

In case of possible bugs, it is recommanded to use the .tiff formart as your primary raster file format while using this addin.

## Contributor

Special thanks to these people who contribute to this project:

* Haoliang Yu
* Xuan Wang
* Jian Qing
* Hancheng Nie

And those who support and enourage us to continue this project.
